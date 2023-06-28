import React, { useState} from 'react'
import { View, StyleSheet } from 'react-native'
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from "react-native-paper"
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"


export const DrawerContent = (props) => {

    const [isDarkTheme, setIsDarkTheme] = useState(false)

    const toggleTheme = ()=>{
        setIsDarkTheme(!isDarkTheme)
    }

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection} >
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://www.bing.com/images/search?view=detailV2&ccid=MclojOSI&id=C30ABA5DE54D183BC52B50D43868D3B041FDBB8F&thid=OIP.MclojOSIH_8-uyHTM3WdZQHaH5&mediaurl=https%3a%2f%2fwww.dlf.pt%2fdfpng%2fmaxpng%2f276-2761324_default-avatar-png.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.31c9688ce4881fff3ebb21d333759d65%3frik%3dj7v9QbDTaDjUUA%26pid%3dImgRaw%26r%3d0&exph=1201&expw=1126&q=default+avatart+png&simid=608047050426114952&FORM=IRPRST&ck=21796705A4DFF824231F55E5FDB77746&selectedIndex=0'
                                }}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>Emmanuel NTIVUG..</Title>
                                <Caption style={styles.caption}>@devemm</Caption>
                            </View>
                        </View>

                        <View style={styles.row}>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>80</Paragraph>
                                <Caption style={styles.caption}>Following</Caption>
                            </View>
                            <View style={styles.section}>
                                <Paragraph style={[styles.paragraph, styles.caption]}>100</Paragraph>
                                <Caption style={styles.caption}>Follower</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={(color, size) => {
                                <Icon name="home-outline" />
                                color = { color }
                                size = { size }
                            }}
                            label="Home"
                            onPress={() => { }}
                        />

                        <DrawerItem
                            icon={(color, size) => {
                                <Icon name="home-outline" />
                                color = { color }
                                size = { size }
                            }}
                            label="Profile"
                            onPress={() => {props.navigation.navigate("Profile")}}
                        />

                        <DrawerItem
                            icon={(color, size) => {
                                <Icon name="bookmark-outline" />
                                color = { color }
                                size = { size }
                            }}
                            label="Bookmarks"
                            onPress={() => { props.navigation.navigate("Bookmark")}}
                        />

                        <DrawerItem
                            icon={(color, size) => {
                                <Icon name="settings-outline" />
                                color = { color }
                                size = { size }
                            }}
                            label="Settings"
                            onPress={() => { props.navigation.navigate("Setting") }}
                        />

                        <DrawerItem
                            icon={(color, size) => {
                                <Icon name="account-check-outline" />
                                color = { color }
                                size = { size }
                            }}
                            label="Support"
                            onPress={() => { props.navigation.navigate("Support")}}
                        />

                    </Drawer.Section>

                    <Drawer.Section title="preferences">
                        <TouchableRipple onPress={()=> {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents='none'>
                                    <Switch value={isDarkTheme} />

                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>

                </View>
            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={(color, size) => {
                        <Icon name='exit-to-appp' />
                        color = { color }
                        size = { size }
                    }}
                    label="Sign Out"
                    onPress={() => { }}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});

export default DrawerContent