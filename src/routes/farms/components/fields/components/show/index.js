import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Map } from 'immutable'

import { read } from 'support/request'
import Content from 'components/content'
import Title from 'components/title'
import Subtitle from 'components/subtitle'
import Button from 'components/button'
import Copy from 'components/copy'
import Card from 'components/card'

import Graph from './components/graph'
import PhotoList from './components/photos'
import styles from './styles.sass'

export default class Show extends Component {
  state = {
    field: new Map()
  }
  async componentWillMount () {
    try {
      const fieldId = this.props.match.params.fieldId
      const field = await read(`fields/${fieldId}`)
      this.setState({
        field
      })
    } catch (err) {
      console.log(err)
    }
  }
  render () {
    const {match} = this.props
    const {field} = this.state
    return (
      <Content>
        <Title>
          {field.get('name')}
        </Title>

        <Card>
          <div className={styles.section}>
            {
              field.get('coverage')
                ? <Graph coverage={field.get('coverage')} />
                : <Copy type='subtitle'>No coverage data available</Copy>
            }
          </div>
        </Card>

        <Subtitle type='subtitle'>
          Photos
        </Subtitle>

        <PhotoList
          path={match.url}
          photos={field.get('photos')} />

        <Link
          className={styles.button}
          to={`${match.url}/photos`}>
          <Button>
            Take New Photo
          </Button>
        </Link>
      </Content>
    )
  }
}
