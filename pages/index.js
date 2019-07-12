import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import ReactGA from 'react-ga';
import Slideshow from '../components/Slideshow';
import Panel from '../components/Panel';
import Item from '../components/Item';
import Thermometer from '../components/Thermometer';
import {
  formatNames,
  formatRank,
  formatCountry,
  formatCoords,
  formatPopulation
} from '../helpers/format';
import config from '../config';

const Title = ({ names, temp, range }) => (
  <>
    <div className="names">{names}</div>
    <Thermometer
      className="thermometer"
      temp={temp}
      range={range}
      widthFactor={0.15}
    />
    <style jsx>
      {`
        .names {
          flex: 0;
          white-space: wrap;
        }
        .thermometer {
          flex: 0;
        }
      `}
    </style>
  </>
);

Title.propTypes = {
  names: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  range: PropTypes.shape({
    minTemp: PropTypes.number.isRequired,
    maxTemp: PropTypes.number.isRequired
  }).isRequired,
  widthFactor: PropTypes.number.isRequired
};

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  async componentDidMount() {
    ReactGA.pageview('/');
    const { api } = config;
    const data = await fetch(`${api}/web/live`).then(res => res.json());
    this.setState({
      isLoading: false,
      ...data
    });
  }

  render() {
    const {
      isLoading,
      record,
      city,
      photos,
      stats,
      maxTemp,
      minTemp
    } = this.state;
    return (
      <>
        <Head>
          <title>Hot Cities • world hottest city, now.</title>
        </Head>
        <Slideshow photos={isLoading ? [] : photos} />
        <Panel
          title={() => (
            <Title
              names={formatNames(city)}
              temp={record.temp}
              range={{ minTemp, maxTemp }}
            />
          )}
          isLoading={isLoading}
        >
          {!isLoading && (
            <>
              <Item value={formatPopulation(city.population)} icon="users" />
              <Item value={formatCountry(city)} icon="globe" />
              <Item value={formatCoords(city)} icon="map-marker" />
              <Item value={formatRank(stats)} icon="thermometer-full" />
            </>
          )}
        </Panel>
      </>
    );
  }
}

export default Index;
