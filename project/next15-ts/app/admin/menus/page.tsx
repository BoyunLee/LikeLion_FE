"use client";

import { useEffect, useState } from "react";

const List = () => {
    // 데이터를 가져오는 부분은 서비스를 호출한다.
    // 가 아니라 어댑터를 사용할 예정이다.
    
    const [menus, setMenus] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            const res = await fetch("/api/menus");
            const data = await res.json();
            setMenus(data);
        };
        fetchData();
    }, []);



    return (
        <div>
            <h2>Admin Menu List Page</h2>
            <pre>{JSON.stringify(menus, null, 2)}</pre>
        </div>
    );
};

export default List;