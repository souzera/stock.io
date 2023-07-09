'use client'

import { Produto } from "@/types/produto";
import { Table, TableProps } from "antd";
import Search from "antd/es/input/Search";
import axios from "axios";
import { useEffect, useState } from "react";

import { BiSearch } from 'react-icons/bi'

export function ListProdutos() {

    const [produtos, setProdutos] = useState<Produto[]>([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/produtos').then(response => {
            setProdutos(response.data.data)
            console.log(produtos)
        });
    },[])

    const columns = [
        {
            title: 'Descrição',
            dataIndex: 'nome',
            key: 'nome',
        },
        {
            title: 'Preço',
            dataIndex: 'preco',
            key: 'preco',
        },
        {
            title: 'Fornecedor',
            dataIndex: 'fornecedor',
            key: 'fornecedor',
        },
    ];

    const onChange = () => {
        console.log('mudar filtro')
    };

    const paginationProps = {
        pageSize: 5,
    }

    return <>
        <div className="flex flex-1 flex-col gap-y-4 justify-center items-center">
            <Search
                placeholder="Procurar"
                allowClear
                enterButton={<BiSearch/>}
                size="large"
                onSearch={()=>{console.log("busca")}}
            />

            <Table
                className="w-[100%] h-[100%]"
                columns={columns}
                dataSource={produtos}
                onChange={onChange}
                pagination={paginationProps} />
        </div>
    </>

}