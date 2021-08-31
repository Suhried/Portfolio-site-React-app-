import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {BarChart, Bar, ResponsiveContainer, Tooltip, XAxis} from "recharts";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";


class Technology extends Component {
    constructor() {
        super();
        this.state={
           data : []

        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.ChartData).then(result=>{
            this.setState({data:result})

        })

    }

    render() {
        return (
            <Fragment>
                <Container>
                    <h1 className="serviceName text-center p-3">Technology</h1>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart width={150} height={220} data={this.state.data}>
                                    <Bar dataKey="y_data" fill="#00BFFF" />
                                    <XAxis dataKey="x_data" />
                                    <Tooltip />
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>

                        <Col lg={6} md={12} sm={12}>
                            <p className="text-justify">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
<p className="text-justify">"Sed ut perspiciatis unde idhi uwdi diuiu gdiugi  de uiduegadguag duiaguiedg aiuheai fhiomnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default Technology;