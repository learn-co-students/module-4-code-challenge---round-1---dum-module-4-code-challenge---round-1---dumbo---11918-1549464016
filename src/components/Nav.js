import React from 'react'

const Nav = (props) => {
    return (
        <div class="segment inverted">
            <div class="ui menu">
                <div class="ui category search item">
                    <div class="ui transparent icon input">
                        <input class="prompt" type="text" placeholder="search by name or class..." onChange={props.searchHandler}/>
                        <i class="search link icon"></i>
                    </div>
                    <div class='results'>
                    </div>
                </div>
                {/* <div class="right menu">
                    <div class="ui label">Sort by: </div>
                    <div class="ui button">armor</div>
                    <div class="ui button">damage</div>
                    <div class="ui button">health</div>
                </div> */}
            </div>
        </div>    
    )
}

export default Nav