import React from 'react';
import CategoryList from './CategoryList';
import { Panel, Button, Glyphicon, Checkbox } from 'react-bootstrap';


const Category = (props)=> {
        return (
            <div className="category">
                <Panel>
                    <Checkbox className="pull-left">{props.name}</Checkbox>
                    <Button><Glyphicon glyph="pencil"/></Button>
                    <Button className="pull-right"><Glyphicon glyph="plus"/></Button>
                    <Button className="pull-right"><Glyphicon glyph="trash"/></Button>
                </Panel>
                <CategoryList categories={props.subs}/>
            </div>
        );
}

export default Category;