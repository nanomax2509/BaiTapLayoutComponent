import React, { Component } from 'react'
import Header from './header'
import Carousel from './Carousel'
import Item from './Item'
import Footer from './Footer'

export default class HomeLayout extends Component {
    render() {
        return (
            <>
                <Header />
                <Carousel />
                <div class="container">
                    <div class="row">
                        <div class="col-3 "><Item /></div>
                        <div class="col-3 "><Item /></div>
                        <div class="col-3 "><Item /></div>
                        <div class="col-3 "><Item /></div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}
