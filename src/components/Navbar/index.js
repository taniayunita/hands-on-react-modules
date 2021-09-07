import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Button} from 'antd';
import "./navbar.scss"
import ImgBRI from '../../assets/images-ui-navbar/logo-long-bri.png'


const { Header, Footer, Sider, Content } = Layout;

const Navbar = () => {
    return (
        <div>
            
                            <Layout className="layout">
                                <Header className="header">
                                <img clasName="logo" src={ImgBRI} alt="logo bri"/>
                                <div className="menu-right"> 
                                    <Menu className="menu" mode="horizontal" defaultSelectedKeys={['2']}>
                                        <Menu.Item className="menu">Beranda</Menu.Item>
                                        <Menu.Item className="menu">Book Nomor Antrian</Menu.Item>
                                        <Menu.Item className="menu">Daftar Bank & Info Antrian</Menu.Item>
                                        
                                    </Menu>
                                    <Button className="btn-out"  shape="round">Sign out</Button>
                                </div>
                                
                                </Header>
                               
                            </Layout>

                            
                
                    
               
        </div>
    )
}

export default Navbar
