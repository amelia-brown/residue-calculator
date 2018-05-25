import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Map } from 'immutable'

import Content from 'components/content'
import Title from 'components/title'
import Subtitle from 'components/subtitle'
import Button from 'components/button'
import { read } from 'support/request'

import Info from './components/info'
import FieldList from './components/fields'
import styles from './styles.sass'

export default class Show extends Component {
  state = {
    farm: new Map()
  }

  async componentDidMount () {
    let id = this.props.match.params.farmId
    const farm = await read(`farms/${id}`)
    this.setState({
      farm
    })
  }

  render () {
    let {match} = this.props
    let {farm} = this.state

    if (!farm) return null

    return (
      <Content>

        <Title>
          {farm.get('name')}
        </Title>

        <Info farm={farm} />

        <Subtitle type='subtitle'>
          Fields
        </Subtitle>

        <FieldList
          path={match.url}
          fields={farm.get('fields')} />

        <Link
          className={styles.button}
          to={`${match.url}/fields/create`}>
          <Button>
            New Field
          </Button>
        </Link>

      </Content>
    )
  }
}
