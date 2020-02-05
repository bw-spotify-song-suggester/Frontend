import React, { useState } from "react";

const Favorite = (props) => {
    console.log("Favorite:", props);
    return (
        <div>
            <h1>
                Track:{props.data.track_name}
            </h1>
            <h2>
                Artist:{props.data.artist_name}
            </h2>
        </div>
    )
}

export default Favorite;