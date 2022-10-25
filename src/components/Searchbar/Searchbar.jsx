// import React from "react";

import { useState } from 'react';
import PropTypes from "prop-types";

import { BiSearch } from "react-icons/bi";
import s from './searchbar.module.css';

const SearchBar = ({ onSubmit }) => {

    const [querry, setQuerry] = useState('')

    const handleChange = ({ target }) => {
        const { value } = target;
        setQuerry(value);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(querry);
    };

    return (
        <header className={s.searchbar}>
            <form className={s.form} onSubmit={handleSubmit}>
                <input
                    className={s.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={handleChange}
                />
                <button type="submit" className={s.button}>
                    <span className={s.button_label}>Search</span>
                    <BiSearch className={s.search_icon} />
                </button>
            </form>

        </header>
    );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// class SearchBar extends Component {
//     state = {
//         querry: '',
//     }

//     handleChange = ({target}) => {
//         const {value} = target;
//         this.setState({
//             querry: value,
//         })
//     }
//     //     handleInput = (event) => {
//     //     this.setState({ querry: event.currentTarget.value.toLowerCase() });
//     // }

//     handleSubmit = (e) => {
//         e.preventDefault();
//         const {onSubmit} = this.props;
//         onSubmit({...this.state});
//         this.setState({
//             querry: ""
//         })
//     }

//     render() {
//         const { handleChange, handleSubmit } = this;
        
//         return (
//             <header className={s.searchbar}>
//                 <form className={s.form} onSubmit={handleSubmit}>
//                     <input
//                         className={s.input}
//                         type="text"
//                         autoComplete="off"
//                         autoFocus
//                         placeholder="Search images and photos"
//                         onChange={handleChange}
//                     />
//                     <button type="submit" className={s.button}>
//                         <span className={s.button_label}>Search</span>
//                         <BiSearch className={s.search_icon} />
//                     </button>
//                 </form>

//             </header>
//         )
//     }
// }


export default SearchBar;