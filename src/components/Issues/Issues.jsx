import React from 'react';
import { Card, Feed, List, Label } from 'semantic-ui-react';
import './Issues.css';

const Issues = () => (
  <Card>
    <Card.Content>
      <Card.Header>
        Git Issues
      </Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <List divided relaxed>
          <List.Item>
            <List.Content>
              <List.Header>#1 Git Issue One</List.Header>
              <Label.Group tag>
                <div className="us tiny label">
                  <Label>question</Label>
                </div>
              </Label.Group>
              <List.Description>Assigned To: Jenny</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>#2 Git Issue One</List.Header>
              <Label.Group tag><Label>bug</Label></Label.Group>
              <List.Description>Assigned To: Jenny</List.Description>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header>#3 Git Issue One</List.Header>
              <Label.Group tag><Label>help</Label></Label.Group>
              <List.Description>Assigned To: Jenny</List.Description>
            </List.Content>
          </List.Item>
        </List>
      </Feed>
    </Card.Content>
  </Card>
);

export default Issues;
