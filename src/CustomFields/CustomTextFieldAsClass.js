import React from 'react';

class AssessedTierField extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showNotes: false };
  }

  handleNotesClick = () => {
    this.setState({ showNotes: !this.state.showNotes });
  }

  render() {
    const { showNotes } = this.state;
    const { formData, onChange } = this.props;

    return (
      <div>
        <label dangerouslySetInnerHTML={{__html: this.props.schema.title}} />
        <input
          type="text"
          value={formData.value || ''}
          onChange={(event) => onChange('value', event.target.value)}
          pattern={this.props.schema.properties.value.pattern}
          minLength={this.props.schema.properties.value.minLength}
          maxLength={this.props.schema.properties.value.maxLength}
        />
        <a href={formData.instruction_link || '#'} target="_blank" rel="noopener noreferrer">Instruction</a>
        <button type="button" onClick={this.handleNotesClick}>Note</button>
        {showNotes && (
          <textarea
            value={formData.notes || ''}
            onChange={(event) => onChange('notes', event.target.value)}
            maxLength={3600}
          />
        )}
      </div>
    );
  }
}

export default AssessedTierField;
