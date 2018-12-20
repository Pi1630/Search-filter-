import React, { Component } from 'react'
import {StyleSheet,Text,View,ScrollView,Image} from 'react-native'
import {ListItem,Avatar,SearchBar} from 'react-native-elements'

const list = [
    {
        name: 'Amy Farha',
        avatar_url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg',
        subtitle: 'Vice President'
    },
    {
        name: 'Jackie Chan',
        avatar_url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Jackson Yellow',
        avatar_url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Bale',
        avatar_url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Houston',
        avatar_url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris London',
        avatar_url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Bay',
        avatar_url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Gayle',
        avatar_url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris York',
        avatar_url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Finn',
        avatar_url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Huckleberry',
        avatar_url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Nisaaan',
        avatar_url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Gray',
        avatar_url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Lester',
        avatar_url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Dublin',
        avatar_url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris White',
        avatar_url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Grey',
        avatar_url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg',
        subtitle: 'Vice Chairman'
    },
    {
        name: 'Chris Brown',
        avatar_url: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg',
        subtitle: 'Vice Chairman'
    }
]


export default class avatarListScreen extends Component {

    constructor() {
        super()
        this.state={
            search:''
        }
    }


  render() {

    let filteredContacts = list.filter(
        (contact) => {
            return contact.name.indexOf(this.state.search) !== -1;
        }
    )
    return (
        <View>
            <SearchBar 
            placeholder="Type here..."
            onChangeText= { (text) => {
                this.setState({search: text })}}
            value={this.state.search}
            />
            <ScrollView>
                {
                    filteredContacts.map((l, i) => (
                        <ListItem
                            roundAvatar
                            key={i}
                            avatar={{ source: { uri:'https://ichef.bbci.co.uk/news/660/cpsprodpb/37B5/production/_89716241_thinkstockphotos-523060154.jpg' } }}
                            title={l.name}
                            subtitle={l.subtitle}
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
  }
}
