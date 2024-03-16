import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult";
import withAuth from "../Utility/withAuth";

function Search() {
  return (
    <div>
      <Header />
      <div class="s009">
        <SearchForm/>
       
      </div>
      <div class="s010">
        <SearchResult/>
      </div>
      <Footer />
    </div>
  );
}

export default withAuth(Search);
