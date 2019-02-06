import React from 'react'

const Nav = (props) => {
    return (
        <div class="segment inverted">
            <div class="ui menu">
                <div class="ui category search item">
                    <div class="ui transparent icon input">
                        <input class="prompt" type="text" placeholder="search bots..." onChange={props.searchHandler}/>
                        <i class="search link icon"></i>
                    </div>
                    <div class='results'>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Nav