import { useState } from "react";
import styled from "styled-components";
import { BsFillCalendarFill } from 'react-icons/bs';

const List = styled.ul`
    list-style: none;
    padding: 0
`;

const ListItem = styled.li<ListItemProps>`
    padding: 5px 0;
    background: ${ props => props.active ? 'blue' : 'none'};
`;
interface ListItemProps {
    active: boolean;
}


interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

const ListGroup = ({items, heading, onSelectItem}: Props) => {
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>{heading}</h1>
            {
                items.length === 0 && <p>No items found</p>
            }

            <BsFillCalendarFill color="blue" size="50"/>

            <List>        
                {items.map((item, index) => (
                    <ListItem 
                        active={ index === selectedIndex }
                        key={ item }
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}
                    >
                        {item}
                    </ListItem>
                ))}
            </List>
        </>
    )
}

export default ListGroup;