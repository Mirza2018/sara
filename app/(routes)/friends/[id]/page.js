import SingleFriend from '@/components/FriendsPage/SingleFriend';
import React from 'react';

const page = ({params}) => {
    return (
        <div>
            <SingleFriend id={params.id}/>
        </div>
    );
};

export default page;