import React from 'react'
import PhotoWrapper from "../components/PhotoWrapper/PhotoWrapper";
import GridTemplate from "../templates/GridTemplate";


const favourites = [
    {imageUrl: "https://images.unsplash.com/photo-1582648872797-f1ad5c93949b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"},
    {imageUrl: "https://images.unsplash.com/photo-1486291301608-a503c774721a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1253&q=80"},
    {imageUrl: "https://images.unsplash.com/photo-1581508525322-f5d437639ff9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}]


const FavView = () => (
    <GridTemplate>
        {favourites.map(item =>
            <PhotoWrapper key={item.imageUrl} imageUrl={item.imageUrl}/>)}
    </GridTemplate>
)

export default FavView;