import React, { useEffect, useState } from "react";

const ProductList = ({category}:{category:string}) => {
    const [products, setProducts] = useState<string[]>([]);
    //const [category, setCategory] = useState("");
    useEffect(() => {
        console.log("Fetching product in", category);
        setProducts(["clothing", "household"]);
    }, [category]);
    return (
        <div>

        </div>
    );
};

export default ProductList;
