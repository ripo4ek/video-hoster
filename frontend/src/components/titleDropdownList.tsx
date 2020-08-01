import * as React from 'react'

import styles from '../styles/titleDropdownList.module.css'
import { CSSTransition } from 'react-transition-group'
import { ITitleDropdownList } from '../Interfaceses/ITitleDropdownList'
import TitleDropdownElement from './titleDropdownElement'

export interface TitleDropdownListProps {
  elements: ITitleDropdownList
}

export interface TitleDropdownListState {
  isActive: Boolean
}
class TitleDropdownList extends React.Component<
  TitleDropdownListProps,
  TitleDropdownListState
> {
  state = {
    isActive: false,
  }

  clickHandler = () => {
    let isActive = !this.state.isActive
    this.setState({ isActive })
  }
  render() {
    const elements = { ...this.props.elements }
    return (
      <div className={styles.flexMainContainer}>
        <div className={styles.flexContainer}>
          <div className={styles.title}>{elements.name}</div>
          <div className={styles.link} onClick={this.clickHandler}>
            {this.state.isActive ? 'Свернуть' : 'Развернуть'}
          </div>
        </div>

        <CSSTransition
          in={this.state.isActive}
          timeout={600}
          classNames={{
            enter: styles.menuEnter,
            enterActive: styles.menuEnterActive,
            exit: styles.menuExit,
            exitActive: styles.menuExitActive,
            exitDone: styles.menuExitDone,
          }}
        >
          <div className={styles.container}>
            {elements.titleElements.map((title) => (
              <TitleDropdownElement title={title} />
            ))}
          </div>
        </CSSTransition>
      </div>
    )
  }
}

export default TitleDropdownList
