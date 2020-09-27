import React, {Component} from 'react';
import axios from "axios"
import Loader from "./Loader/Loader";
import Table from "./Table/Table";
import _ from 'lodash';
import ItemUser from "./ItemUser/ItemUser";
import ModeSelector from "./ModeSelector/ModeSelector";
import ReactPaginate from 'react-paginate';
import Search from "./Search/Search";
import NewUser from "./NewUser/NewUser";
import ModalWindow from "./ModalWindow/ModalWindow";


class App extends Component {

    state = {
        isModalWindowOpened: false,
        isModeSelected: false,
        isLoading: false,
        data: [],
        sort: 'asc',
        sortField: 'id',
        row: {address: {city: "", state: "", streetAddress: "", zip: ""}},
        currentPage: 0,
        search: '',
        iaAddNewUser: false
    };

    onSort = (sortField) => {
        const cloneData = this.state.data.concat();
        const sort = this.state.sort === 'asc' ? 'desc' : 'asc';
        const data = _.orderBy(cloneData, sortField, sort);
        this.setState({
            data,
            sort,
            sortField
        })
    };
    onRowSelect = row => (
        this.setState({row})
    );

    async loadData(url) {
        try {
            const response = await axios.get(url);
            this.setState({
                isLoading: false,
                data: _.orderBy(response.data, this.state.sortField, this.state.sort)
            })

        } catch (e) {
            this.setState({
                isModalWindowOpened: true
            })
        }
    }

    modeSelectHandler = url => {
        this.setState({
            isModeSelected: true,
            isLoading: true,
        });
        this.loadData(url)
    };


    pageChangeHandler = ({selected}) => (
        this.setState({currentPage: selected})
    );
    searchHandler = search => (
        this.setState({search, currentPage: 0})
    );

    getFilteredData() {
        const {data, search} = this.state;

        if (!search) {
            return data
        }

        return data.filter(item => {
            return item['firstName'].toLowerCase().includes(search.toLowerCase())
                || item['lastName'].toLowerCase().includes(search.toLowerCase())
                || item['email'].toLowerCase().includes(search.toLowerCase())
        })
    }

    NewUserHandler = () => {
        this.setState({iaAddNewUser: true})
    };

    addNewUser = (newUser) => {
        this.setState({
            data: [newUser, ...this.state.data]
        });
    };

    closeModalWindow = () => {
        this.setState({
            isModalWindowOpened: false
        })
    }

    render() {
        const pageSize = 50;
        if (!this.state.isModeSelected) {
            return (
                <div className="container">
                    <ModeSelector onSelect={this.modeSelectHandler}/>
                </div>
            )
        }

        const filteredData = this.getFilteredData();
        const pageCount = Math.ceil(filteredData.length / pageSize);
        const displayData = _.chunk(filteredData, pageSize)[this.state.currentPage];
        return (
            <div className="container">
                {this.state.isModalWindowOpened
                    ? <ModalWindow closeModalWindow={this.closeModalWindow}/>
                    : null
                }
                {this.state.isLoading
                    ? <Loader/>
                    : <div>
                        <Search onSearch={this.searchHandler}/>
                        <button className="btn btn-primary mb-3" type="button" onClick={this.NewUserHandler}> Добавить
                        </button>
                        {this.state.iaAddNewUser
                            ? <NewUser addNewUser={this.addNewUser}/>
                            : null
                        }
                        <Table data={displayData} onSort={this.onSort} sort={this.state.sort}
                               sortField={this.state.sortField} onRowSelect={this.onRowSelect}/>
                        {this.state.data.length > pageSize
                            ? <ReactPaginate
                                previousLabel={'<'}
                                nextLabel={'>'}
                                breakLabel={'...'}
                                breakClassName={'break-me'}
                                pageCount={pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={this.pageChangeHandler}
                                containerClassName={'pagination'}
                                activeClassName={'active'}
                                pageClassName="page-item"
                                pageLinkClassName="page-link"
                                previousClassName="page-item"
                                nextClassName="page-item"
                                previousLinkClassName="page-link"
                                nextLinkClassName="page-link"
                                forcePage={this.state.currentPage}
                            />
                            : null
                        }
                        <ItemUser person={this.state.row}/>
                    </div>
                }
            </div>
        );
    }
}

export default App;

