import React from 'react'
import {connect} from 'react-redux'

import {CHANGE} from './actions.js'

class LangSelect extends React.Component {
    handleChange(e) {
        return this.props.onChange(e.target.value)
    }

    render() {
        let messages = {en: true}
        return (
            <p>
                <label htmlFor="lang-select">
                    Language:
                </label>
                <select id='lang-select' value={this.props.value} onChange={this.handleChange.bind(this)}>
                    {Object.keys(messages).map(lang =>
                        <option key={lang} value={lang}>{lang}</option>
                    )}
                </select>
            </p>
        )
    }
}
LangSelect.propTypes = {
    onChange: React.PropTypes.func,
    value: React.PropTypes.string.isRequired,
}

class SettingsForm extends React.Component {
    render() {
        return (
            <form>
                <LangSelect onChange={this.props.onLanguageChange} value={this.props.language} />
            </form>
        )
    }
}
SettingsForm.propTypes = {
    language: React.PropTypes.string.isRequired,
    onLanguageChange: React.PropTypes.func,
}

export const Container = connect(
    state => state.settings,
    dispatch => ({
        onLanguageChange: (lang) => {
            dispatch(CHANGE({language: lang}))
        },
    })
)(SettingsForm)

export default Container
