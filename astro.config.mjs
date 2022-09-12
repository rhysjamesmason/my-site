import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import robotsTxt from 'astro-robots-txt';
import compress from "astro-compress";
import partytown from "@astrojs/partytown";

import critters from "astro-critters";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.rhysjames.tk',
  integrations: [mdx(), robotsTxt(), compress(), partytown(), critters()]
});