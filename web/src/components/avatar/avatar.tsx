import { Dropdown, MenuProps, Space, message } from "antd";
import { AiFillCaretDown } from "react-icons/ai";

interface AvatarBadge {
    nome:string,
    username: string,
    url_avatar:string
}

export default function AvatarBadge({nome, username, url_avatar}:AvatarBadge){

    const onClick: MenuProps['onClick'] = ({ key }) => {
        message.info(`Click on item ${key}`);
    };

    const items: MenuProps['items'] = [
        {
            label: 'Configurações',
            key: '1',
        },
        {
            label: 'Sair',
            key: '2',
        },
    ];

    return (
        <>
            <div id='topbar-container' className="flex h-16 justify-end mx-4 px-4">
                        <div className="flex flex-1 justify-end items-center p-2 gap-3" id="usuario-conteiner">
                            <div className="flex flex-col justify-end text-right">
                                <h1 className="text-zinc-800 text-lg font-semibold">{nome}</h1>
                                <h3 className="text-zinc-400 text-sm">{username}</h3>
                            </div>
                            <div className="h-full">
                                <img className=" flex rounded-full h-full" src={url_avatar} alt="avatar do usuario" />
                            </div>
                            <Dropdown menu={{ items, onClick }}>
                                <a onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <AiFillCaretDown />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
                    </div>
        </>
    )
}