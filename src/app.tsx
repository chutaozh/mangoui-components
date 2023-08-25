import React from 'react';
import { createRoot } from 'react-dom/client';
import { Badge, Alert, Button } from './components';
import './index.less';

function App() {
    return (
        <div className="container">
            <div className="container-row">
                <div className="card">
                    <div className="card-header">
                        <h2>Badge Basic</h2>
                    </div>
                    <div className="card-body badge-list">
                        <Badge type="primary">Primary</Badge>
                        <Badge type="success">Success</Badge>
                        <Badge type="danger">Danger</Badge>
                        <Badge type="info">Info</Badge>
                        <Badge type="warning">Warning</Badge>
                        <Badge type="dark">Dark</Badge>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h2>Badge Ghost</h2>
                    </div>
                    <div className="card-body badge-list">
                        <Badge type="primary" ghost>Primary</Badge>
                        <Badge type="success" ghost>Success</Badge>
                        <Badge type="danger" ghost>Danger</Badge>
                        <Badge type="info" ghost>Info</Badge>
                        <Badge type="warning" ghost>Warning</Badge>
                        <Badge type="dark" ghost>Dark</Badge>
                    </div>
                </div>
            </div>
            <div className="container-row">
                <div className="card">
                    <div className="card-header">
                        <h2>Button Basic</h2>
                    </div>
                    <div className="card-body button-list">
                        <Button>Deafult</Button>
                        <Button type="primary">Primary</Button>
                        <Button type="success">Success</Button>
                        <Button type="danger">Danger</Button>
                        <Button type="info">Info</Button>
                        <Button type="warning">Warning</Button>
                        <Button type="dark">Dark</Button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h2>Button Ghost</h2>
                    </div>
                    <div className="card-body button-list">
                        <Button ghost>Deafult</Button>
                        <Button type="primary" ghost>Primary</Button>
                        <Button type="success" ghost>Success</Button>
                        <Button type="danger" ghost>Danger</Button>
                        <Button type="info" ghost>Info</Button>
                        <Button type="warning" ghost>Warning</Button>
                        <Button type="dark" ghost>Dark</Button>
                    </div>
                </div>
            </div>
            <div className="container-row">
                <div className="card">
                    <div className="card-header">
                        <h2>Button Disabled</h2>
                    </div>
                    <div className="card-body button-list">
                        <div>
                            <Button disabled>Deafult</Button>
                            <Button type="primary" disabled>Primary</Button>
                            <Button type="success" disabled>Success</Button>
                            <Button type="danger" disabled>Danger</Button>
                            <Button type="info" disabled>Info</Button>
                            <Button type="warning" disabled>Warning</Button>
                            <Button type="dark" disabled>Dark</Button>
                        </div>
                        <div>
                            <Button disabled ghost>Deafult</Button>
                            <Button type="primary" disabled ghost>Primary</Button>
                            <Button type="success" disabled ghost>Success</Button>
                            <Button type="danger" disabled ghost>Danger</Button>
                            <Button type="info" disabled ghost>Info</Button>
                            <Button type="warning" disabled ghost>Warning</Button>
                            <Button type="dark" disabled ghost>Dark</Button>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h2>Button Size</h2>
                    </div>
                    <div className="card-body button-list">
                        <div>
                            <Button size="small">Deafult</Button>
                            <Button type="primary" size="small">Primary</Button>
                            <Button type="success" size="small">Success</Button>
                            <Button type="danger" size="small">Danger</Button>
                            <Button type="info" size="small">Info</Button>
                            <Button type="warning" size="small">Warning</Button>
                            <Button type="dark" size="small">Dark</Button>
                        </div>
                        <div>
                            <Button size="large">Deafult</Button>
                            <Button type="primary" size="large">Primary</Button>
                            <Button type="success" size="large">Success</Button>
                            <Button type="danger" size="large">Danger</Button>
                            <Button type="info" size="large">Info</Button>
                            <Button type="warning" size="large">Warning</Button>
                            <Button type="dark" size="large">Dark</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-row">
                <div className="card">
                    <div className="card-header">
                        <h2>Button Group</h2>
                    </div>
                    <div className="card-body button-list">
                        <div>
                            <Button.Group>
                                <Button type="primary">Left</Button>
                                <Button type="primary">Middle</Button>
                                <Button type="primary">Right</Button>
                            </Button.Group>
                        </div>
                        <div>
                            <Button.Group>
                                <Button type="primary" ghost>Left</Button>
                                <Button type="primary" ghost>Middle</Button>
                                <Button type="primary" ghost>Right</Button>
                            </Button.Group>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h2>Button Group Vertical</h2>
                    </div>
                    <div className="card-body button-list">
                        <div>
                            <Button.Group direction="vertical">
                                <Button type="primary">Top</Button>
                                <Button type="primary">Middle</Button>
                                <Button type="primary">Button</Button>
                            </Button.Group>
                            <Button.Group direction="vertical">
                                <Button type="primary" ghost>Top</Button>
                                <Button type="primary" ghost>Middle</Button>
                                <Button type="primary" ghost>Button</Button>
                            </Button.Group>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-row">
                <div className="card">
                    <div className="card-header">
                        <h2>Alert Basic</h2>
                    </div>
                    <div className="card-body alert-list">
                        <Alert>Alert Default!</Alert>
                        <Alert type="primary">Alert Primary!</Alert>
                        <Alert type="success">Alert Success!</Alert>
                        <Alert type="danger">Alert Danger!</Alert>
                        <Alert type="info">Alert Info!</Alert>
                        <Alert type="warning">Alert Warning!</Alert>
                        <Alert type="dark">Alert Dark!</Alert>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h2>Alert Ghost</h2>
                    </div>
                    <div className="card-body alert-list">
                        <Alert ghost>Alert Default!</Alert>
                        <Alert type="primary" ghost>Alert Primary!</Alert>
                        <Alert type="success" ghost>Alert Success!</Alert>
                        <Alert type="danger" ghost>Alert Danger!</Alert>
                        <Alert type="info" ghost>Alert Info!</Alert>
                        <Alert type="warning" ghost>Alert Warning!</Alert>
                        <Alert type="dark" ghost>Alert Dark!</Alert>
                    </div>
                </div>
            </div>
            <div className="container-row">
                <div className="card">
                    <div className="card-header">
                        <h2>Alert Highlighted</h2>
                    </div>
                    <div className="card-body alert-list">
                        <Alert highlighted>Alert Default!</Alert>
                        <Alert type="primary" highlighted>Alert Primary!</Alert>
                        <Alert type="success" highlighted>Alert Success!</Alert>
                        <Alert type="danger" highlighted>Alert Danger!</Alert>
                        <Alert type="info" highlighted>Alert Info!</Alert>
                        <Alert type="warning" highlighted>Alert Warning!</Alert>
                        <Alert type="dark" highlighted>Alert Dark!</Alert>
                    </div>
                </div>
                <div className="card">
                    <div className="card-header">
                        <h2>Alert Closable</h2>
                    </div>
                    <div className="card-body alert-list">
                        <Alert closable>Alert Default!</Alert>
                        <Alert type="primary" closable>Alert Primary!</Alert>
                        <Alert type="success" closable>Alert Success!</Alert>
                        <Alert type="danger" closable>Alert Danger!</Alert>
                        <Alert type="info" closable>Alert Info!</Alert>
                        <Alert type="warning" closable>Alert Warning!</Alert>
                        <Alert type="dark" closable>Alert Dark!</Alert>
                    </div>
                </div>
            </div>
        </div>
    );
}



const container = document.getElementById('root') || document.body;
const root = createRoot(container);
root.render(<App />);