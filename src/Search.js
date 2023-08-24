import React from "react";
import { useGlobalContext } from "./Context";

const Search = () => {
    const { query, searchPost } =useGlobalContext();
    return (
        <>
            {/* <h1>Search Tech News</h1> */}
            <form onSubmit={(e) => e.preventDefault()}>
                <div>
                    <input type="text"
                        placeholder="Search Topics Like HTML CSS JS.."

                        value={query}
                        onChange={(e) => searchPost(e.target.value)} />
                </div>
            </form>
        </>
    );
};
export default Search;