import * as React from 'react'
import { Component } from 'react'
import { ISelectOption } from './../Interfaceses/ISelectOption'
import SelectReact from 'react-select'
import styles from './../styles/select.module.css'
export interface SelectProps {
  options: Array<ISelectOption>
  isMulti: boolean
  title?: string
  placeHolder?: string
  onChange(selectedElement: any): void
}

export interface SelectState {}

class Select extends React.Component<SelectProps, SelectState> {
  private titleRender = (title?: string) => {
    return title === undefined ? null : (
      <span className={styles.title}>{title}</span>
    )
  }
  render() {
    const props = { ...this.props }
    const customStyles = {
      control: (styles: any) => ({
        ...styles,
        boxShadow: 'none',
        borderColor: 'rgba(0,0,0,.24)',
        borderRadius: 'none',
        ':hover': {
          borderColor: 'rgba(0,0,0,.24)',
        },
      }),
      option: (styles: any, { isFocused, isSelected }: any) => ({
        ...styles,
        backgroundColor: isFocused ? 'rgba(0, 0, 0, 0.03)' : null,
        color: '#495057',
      }),
    }
    return (
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          {this.titleRender(props.title)}
          <SelectReact
            options={props.options}
            getOptionLabel={(option: ISelectOption) => option.name}
            getOptionValue={(option: ISelectOption) => option.name}
            isMulti={props.isMulti}
            onChange={props.onChange}
            styles={customStyles}
            placeholder={props.placeHolder}
            noOptionsMessage={() => 'Пусто'}
          />
        </div>
      </div>
    )
  }
}

export default Select
