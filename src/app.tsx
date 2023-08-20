import React from 'react';
import { createRoot } from 'react-dom/client';
import { Badge, Alert, Button } from './components';
import './index.less';

const container = document.getElementById('root') || document.body;
const root = createRoot(container);
root.render(<div className="container">
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
                    <Button type="primary" disabled>Primary</Button>
                    <Button type="success" disabled>Success</Button>
                    <Button type="danger" disabled>Danger</Button>
                    <Button type="info" disabled>Info</Button>
                    <Button type="warning" disabled>Warning</Button>
                    <Button type="dark" disabled>Dark</Button>
                </div>
                <div>
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
                    <Button type="primary" size="sm">Primary</Button>
                    <Button type="success" size="sm">Success</Button>
                    <Button type="danger" size="sm">Danger</Button>
                    <Button type="info" size="sm">Info</Button>
                    <Button type="warning" size="sm">Warning</Button>
                    <Button type="dark" size="sm">Dark</Button>
                </div>
                <div>
                    <Button type="primary" size="lg">Primary</Button>
                    <Button type="success" size="lg">Success</Button>
                    <Button type="danger" size="lg">Danger</Button>
                    <Button type="info" size="lg">Info</Button>
                    <Button type="warning" size="lg">Warning</Button>
                    <Button type="dark" size="lg">Dark</Button>
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
</div>);