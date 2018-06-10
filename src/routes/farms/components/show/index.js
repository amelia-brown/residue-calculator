import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Map } from 'immutable'

import Content from 'components/content'
import Copy from 'components/copy'
import Title from 'components/title'
import Subtitle from 'components/subtitle'
import Button from 'components/button'
import Loading from 'components/loading'
import { read } from 'support/request'

import Info from './components/info'
import FieldList from './components/fields'
import styles from './styles.sass'

export default class Show extends Component {
  state = {
    farm: new Map(),
    loading: false,
    error: false
  }

  async componentDidMount () {
    this.setState({
      loading: true
    })
    try {
      let id = this.props.match.params.farmId
      const farm = await read(`farms/${id}`)
      this.setState({
        farm,
        loading: false
      })
    } catch (error) {
      this.setState({
        loading: false,
        error
      })
    }
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

        {
          this.loading && <Loading />
        }
        {
          this.error &&
            <Copy type='body'>
              There was a problem loading your farms.
            </Copy>
        }

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
