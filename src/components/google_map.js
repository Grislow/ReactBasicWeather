import React, {Component} from 'react';

class GoogleMap extends Component {
    //lifecycle method that gets called after the component has been rendered to the DOM
    componentDidMount() {
        //create embedded google map inside our DOM
        // @param 1: takes reference to HTML element in which it will be rendered
        // @param 2: options object, attributed of the newly created object
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        });
    }
    
    render() {
        //ref allows gaining direct access to an HTML element that has been rendered on the page
        //anywhere in the component you can gain reference to this object through this.refs.map
        return <div ref="map" />;
    }
}

export default GoogleMap;