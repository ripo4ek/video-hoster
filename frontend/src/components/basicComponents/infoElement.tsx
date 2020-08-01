import * as React from 'react'
import { Component } from 'react'
import styles from './../../styles/infoElement.module.css'
import { DropdownDivider } from 'react-bootstrap/Dropdown'
import { IInfoElement } from './../../Interfaceses/IInfoElement'
export interface InfoElementProps {
  name: string
  //info: string | Array<string> | number | Array<IInfoElement>
}

export interface InfoElementState {}

//TODO: Rewrite this part later
class InfdElement extends React.Component<InfoElementProps, InfoElementState> {
  private infoRender = (
    data: string | Array<string> | number | Array<IInfoElement>,
  ) => {
    if (typeof data === 'string' || typeof data === 'number')
      return this.oneElementRender(data)
    if (this.isStringArray(data as Array<string>))
      return this.multiElementsRender(data as Array<string>)

    let names = (data as Array<IInfoElement>).map(({ name }) => name)
    console.log(names)
    return this.multiElementsRender(names)
  }
  private isStringArray = (data: any) => {
    if (data instanceof Array) {
      let somethingIsNotString = false
      data.forEach(function (item) {
        if (typeof item !== 'string') {
          somethingIsNotString = true
        }
      })
      if (!somethingIsNotString && data.length > 0) {
        return true
      }
      return false
    }
  }
  private oneElementRender = (element: string | number) => {
    return (
      <div className={styles.elementList}>
        <div className={styles.elementListFlex}></div>
        <div className={styles.elementInfo}>
          <div className={styles.dataContainer}>{element}</div>
        </div>
      </div>
    )
  }
  private multiElementsRender = (elements: Array<string | number>) => {
    return (
      <div className={styles.elementList}>
        <div className={styles.elementListFlex}>
          {elements.slice(0, -1).map((element: string | number) => (
            <div className={styles.elementInfo}>{`${element},`}</div>
          ))}
          <div className={styles.elementInfo}>
            {elements[elements.length - 1]}
          </div>
        </div>
      </div>
    )
  }
  render() {
    const infoElement = { ...this.props }
    return (
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <div className={styles.elementName}>{infoElement.name}</div>
          {infoElement.children}
        </div>
      </div>
    )
  }
}

export default InfdElement
