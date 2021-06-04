import { useEffect, useState } from "react";
import { usePagination, useTable } from "react-table";

import { getTeams } from "../../fakeData";


const Table = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page
    } = useTable({
        columns,
        data,
        initialState: { pageIndex: 0 },
    },
        usePagination);

    return (
        <>
            <h4 className="fw-bold">Can only add upto 6 members</h4>
            <table class="table table-hover" {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                            <th scope="col" style={{ maxWidth: '10%' }}></th>
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>

                    {page.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    if (cell.column.id === 'image')
                                        return <td {...cell.getCellProps()}>
                                            <img src={cell.value} alt="" className="img-fluid" style={{ width: 120 }} />
                                        </td>
                                    else
                                        return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                                })}

                                <td><button className="btn btn-sm float-end me-5 btn-rounded btn-danger">Delete</button></td>
                            </tr>

                        );
                    })}
                </tbody>
            </table>

        </>
    );

}

const ViewTeam = () => {
    const columns = [
        { Header: 'Image', accessor: 'image' },
        { Header: 'Name', accessor: 'name' },
        { Header: 'Description', accessor: 'description' },
    ];


    const [data, setData] = useState([]);

    const getTeams= async()=>{
        try {
            const res=await fetch('/getTeams',{
                method:"GET",
                headers:{ Accept: "application/json",
                "Content-Type": "application/json",},
                credentials: "include",
            })
            const data= await res.json();
           setData(data)
            console.log(data);
            if(!res.status===200){
                const error=new Error(res.error);
                throw error;
            }
            else{
                console.log(data)
            }
        } catch (error) {
            throw error;
        }
    }
    
    
        useEffect(() => {
            getTeams();
        }, [])
    return (
        <>
            <div className="col-lg-10 col-md-10 mx-auto">
                <Table columns={columns} data={data} />
            </div>

        </>
    );
}

export default ViewTeam;
