import React from 'react';

export class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        this.props.headers.push('');
        return (
            <div>
                <table>
                    <thead>
                    {this.props.headers.map((header) => {
                        return (
                        <th>{header}</th>
                        );
                    })}
                    </thead>
                    <tbody>
                    {this.props.data.map((obj) => {
                        let headerCount = 0;
                        return (
                        <tr>
                            <td style={{width: 200}}>{obj[this.props.headers[headerCount++]]}</td>
                            <td style={{width: 100}}>{obj[this.props.headers[headerCount++]]}</td>
                            <td style={{width: 100}}>{obj[this.props.headers[headerCount++]]}</td>
                            <td style={{width: 400}}>{obj[this.props.headers[headerCount++]]}</td>
                            <td style={{width: 100}}>{obj[this.props.headers[headerCount++]]}</td>
                            <td>{obj[this.props.headers[headerCount++]]}</td>
                            <td style={{width: 100}}><button style={{backgroundColor: '#003f5a', borderColor: '#003f5a', color: 'white', borderRadius: 5}}>Sign Up</button></td>
                        </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        );
    }
}