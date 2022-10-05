import {
    BellOutlined, MenuFoldOutlined,
    MenuUnfoldOutlined, RightOutlined
} from '@ant-design/icons'
import { Avatar, Badge, Layout, List, Menu, Popover } from 'antd'
import classnames from 'classnames'
import moment from 'moment'
import { FC, Fragment } from 'react'

const { SubMenu } = Menu

const Header: FC = () => {

    const rightContent = [
        <Menu key="user" mode="horizontal" >
            <SubMenu
                title={
                    <Fragment>
                        <span style={{ color: '#999', marginRight: 4 }}>
                            Hi,
                        </span>
                        <span>Hieu</span>
                        <Avatar style={{ marginLeft: 8 }} />
                    </Fragment>
                }
            >
                <Menu.Item key="SignOut">
                    Sign out
                </Menu.Item>
            </SubMenu>
        </Menu>,
    ]


    rightContent.unshift(
        <Popover
            placement="bottomRight"
            trigger="click"
            key="notifications"
            // overlayClassName={styles.notificationPopover}
            // getPopupContainer={() => document.querySelector('#primaryLayout')}
            content={
                <div 
                // className={styles.notification}
                >
                    <List
                        itemLayout="horizontal"
                        // dataSource={notifications}
                        locale={{
                            emptyText: 'You have viewed all notifications.',
                        }}
                        renderItem={item => (
                            <List.Item 
                            // className={styles.notificationItem}
                            >
                                <List.Item.Meta
                                    title={
                                        'hieu'
                                    }
                                    description={moment().fromNow()}
                                />
                                <RightOutlined style={{ fontSize: 10, color: '#ccc' }} />
                            </List.Item>
                        )}
                    />
                    {/* {notifications.length ? (
                            <div
                                onClick={onAllNotificationsRead}
                                className={styles.clearButton}
                            >
                                Clear notifications
                            </div>
                        ) : null} */}
                </div>
            }
        >
            <Badge
                count={3}
                dot
                offset={[-10, 10]}
                // className={styles.iconButton}
            >
                <BellOutlined
                //  className={styles.iconFont} 
                 />
            </Badge>
        </Popover>
    )

    return (
        <Layout.Header
            // className={classnames(styles.header, {
                // [styles.fixed]: fixed,
                // [styles.collapsed]: collapsed,
            // })}
            id="layoutHeader"
        >
            <div
                // className={styles.button}
                // onClick={onCollapseChange.bind(this, !collapsed)}
            >
                <MenuUnfoldOutlined />
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center'
            }}>{rightContent}</div>
        </Layout.Header>
    )
}

interface Header {
    fixed: boolean
    user: {},
    menus: [],
    collapsed: boolean,
    onSignOut: Function,
    notifications: [],
    onCollapseChange: [],
    onAllNotificationsRead: [],
}

export default Header
