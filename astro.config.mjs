import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';
import compress from "astro-compress";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.rhysjames.tk',
  integrations: [mdx(), sitemap(), robotsTxt(), compress(), partytown()]
});