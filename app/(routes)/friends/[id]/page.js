import SingleFriend from '@/components/FriendsPage/SingleFriend';
import React from 'react';

const page = ({params}) => {
    return (
        <div className=' xl:mt-[113px] lg:mt-[83px] md:mt-[97px]'>
            <SingleFriend id={params.id}/>
        </div>
    );
};

export default page;