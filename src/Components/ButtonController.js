/**
 * Created by hp on 12.08.2017.
 */
import React from '../js/react.min.js';
import Button from 'Button';

var ButtonController = React.createClass({
    buttonsContents:[],
    each:function (text) {
      return <Button content={text}/>
    },
    
    getInitialState: function () {
        return {
            buttonsContents:['hello','friend']
        }
    },
    render:function () {
        return(<div>
            {
                this.state.buttonsContents.map(this.each)
            }
        </div>)

    }
});

export default ButtonController;