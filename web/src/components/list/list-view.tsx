import { Avatar, List } from 'antd';
import React from 'react';


interface ProdutoProps{
    nome: string
}

interface ProdutosProps{
    data: Array<ProdutoProps>,
}

export function ListView(props:ProdutosProps) {
    return <>
        <List
            itemLayout="horizontal"
            dataSource={props.data}
            renderItem={(item, index) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                        title={<a href="https://ant.design">{item.nome}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                    />
                </List.Item>
            )}
        />
    </>
}