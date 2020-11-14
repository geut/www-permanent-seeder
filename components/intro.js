import React, { Component } from 'react'
import { Paragraph } from 'elems'
import Content from 'nextein/content'
import Link from 'nextein/link'
import renderers from 'elems/renderers'

import Section from './section'
import Window from './windows/window'
import { Button } from './button'
import PermanentSeeder from './icons/permanent-seeder'

const byOrderSorter = (a, b) => a.data.order - b.data.order

export default class Intro extends Component {
  render () {
    const { title, url, type = 'website', description } = this.props

    const snippets = [
      'permanent-seeder config:init',
      'permanent-seeder start',
      'permanent-seeder dashboard'
    ]
    return (
      <Section title='About'>
        <div className='container'>
          <Paragraph>{description}</Paragraph>
          <Paragraph>Easily store and share all your hyperdrives.</Paragraph>

          <div className='rows examples'>
            {snippets.map(cmd => (
              <Window type='zsh' cmd={cmd} className={`window example`} />
            ))}
          </div>

          <Paragraph>
            Permanent Seeder is built on top of the{' '}
            <a href='https://hypercore-protocol.org/#hyperdrive'>hyper</a>
            -stack.
          </Paragraph>
          <div className='actions rows'></div>
        </div>

        <style jsx>{`
          .container {
            min-height: 50vh;
            margin-bottom: 5em;
          }

          .rows.examples {
            margin: 5em 0;
            perspective: 1500px;
          }

          :global(.window.example) {
            flex: 1;
          }
          :global(.window.example:nth-child(1)) {
            transform: scale(0.9) rotateY(15deg) rotateX(5deg);
          }
          :global(.window.example:nth-child(2)) {
            transform: scale(1.1);
            margin-left: -4em;
          }
          :global(.window.example:nth-child(3)) {
            transform: scale(0.98) rotateY(-24deg) rotateX(12deg);
            margin-left: -4em;
          }

          @media screen and (max-width: 1024px) {
            .rows.examples {
              display: flex;
              flex-direction: column;
            }
            :global(.window.example:nth-child(1)) {
              transform: scale(1);
            }
            :global(.window.example:nth-child(2)) {
              transform: scale(1.1);
              margin-left: 0;
              marign-top: -8em;
            }
            :global(.window.example:nth-child(3)) {
              transform: scale(1);
              margin-left: 0;
              marign-top: -8em;
            }
          }

          :global(.window.browser .browser) {
            --main-color: var(--grey700);
            background: var(--grey100);
            align-items: center;
            flex-direction: column;
            display: flex;
          }

          .actions :global(button) {
            --button-color: var(--grey900);
            margin: 0 calc(var(--spacing) * 1);
          }
        `}</style>
      </Section>
    )
  }
}
