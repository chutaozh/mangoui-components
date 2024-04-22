import React from 'react';
import { createRoot } from 'react-dom/client';
import { Badge, Alert, Button, Switch } from './components';
import './index.less';

function App() {
    return (
        <div className="container">
            <div className="container-row">
                <div className="card">
                    <div className="card-header">
                        <h2>Badge</h2>
                    </div>
                    <div className="card-body badge-list">
                        <div className="container-row">
                            <div className="card sub-card">
                                <div className="card-header">
                                    <h4>Badge Basic</h4>
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
                            <div className="card sub-card">
                                <div className="card-header">
                                    <h4>Badge Ghost</h4>
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
                    </div>
                </div>
            </div>
            <div className="container-row">
                <div className="card">
                    <div className="card-header">
                        <h2>Button</h2>
                    </div>
                    <div className="card-body button-list">
                        <div className="container-row">
                            <div className="card sub-card">
                                <div className="card-header">
                                    <h4>Button Basic</h4>
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
                            <div className="card sub-card">
                                <div className="card-header">
                                    <h4>Button Ghost</h4>
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
                            <div className="card sub-card">
                                <div className="card-header">
                                    <h4>Button Disabled</h4>
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
                            <div className="card sub-card">
                                <div className="card-header">
                                    <h4>Button Size</h4>
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
                            <div className="card sub-card">
                                <div className="card-header">
                                    <h4>Button Group</h4>
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
                            <div className="card sub-card">
                                <div className="card-header">
                                    <h4>Button Group Vertical</h4>
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
                    </div>
                </div>
            </div>
            <div className="container-row">
                <div className="card">
                    <div className="card-header">
                        <h2>Switch</h2>
                    </div>
                    <div className="card-body switch-list">
                        <div className="container-row">
                            <div className="card sub-card">
                                <div className="card-header">
                                    <h4>Switch Basic</h4>
                                </div>
                                <div className="card-body switch-list">
                                    <Switch defaultChecked />
                                    <Switch defaultChecked type="success" />
                                    <Switch defaultChecked type="danger" />
                                    <Switch defaultChecked type="info" />
                                    <Switch defaultChecked type="warning" />
                                    <Switch defaultChecked type="dark" />
                                </div>
                            </div>
                            <div className="card sub-card">
                                <div className="card-header">
                                    <h4>Switch Size</h4>
                                </div>
                                <div className="card-body switch-list">
                                    <Switch defaultChecked size='large' />
                                    <Switch defaultChecked />
                                    <Switch defaultChecked size='small' />
                                </div>
                            </div>
                        </div>
                        <div className="container-row">
                            <div className="card sub-card">
                                <div className="card-header">
                                    <h4>Switch Disabled</h4>
                                </div>
                                <div className="card-body switch-list">
                                    <Switch defaultChecked disabled />
                                    <Switch defaultChecked type="success" disabled />
                                    <Switch defaultChecked type="danger" disabled />
                                    <Switch defaultChecked type="info" disabled />
                                    <Switch defaultChecked type="warning" disabled />
                                    <Switch defaultChecked type="dark" disabled />
                                </div>
                            </div>
                            <div className="card sub-card">
                                <div className="card-header">
                                    <h4>Switch With Text</h4>
                                </div>
                                <div className="card-body switch-list">
                                    <Switch defaultChecked size="large" onText='ON' offText='OFF' />
                                    <Switch defaultChecked onText='ON' offText='OFF' />
                                    <Switch defaultChecked size="small" onText='ON' offText='OFF' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-row">
                <div className="card">
                    <div className="card-header">
                        <h2>Alert</h2>
                    </div>
                    <div className="card-body alert-list">
                        <div className="container-row">
                            <div className="card sub-card">
                                <div className="card-header">
                                    <h4>Alert Basic</h4>
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
                            <div className="card sub-card">
                                <div className="card-header">
                                    <h4>Alert Ghost</h4>
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
                            <div className="card sub-card">
                                <div className="card-header">
                                    <h4>Alert Highlighted</h4>
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
                            <div className="card sub-card">
                                <div className="card-header">
                                    <h4>Alert Closable</h4>
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
                </div>
            </div>
        </div>
    );
}



const container = document.getElementById('root') || document.body;
const root = createRoot(container);
root.render(<App />);