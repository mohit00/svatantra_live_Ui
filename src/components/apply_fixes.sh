#!/bin/bash

# Fix 1: Hide arrow for Investors items with subPages (line 295)
sed -i '295s/{page.subPages.length > 0 && <img/{page.subPages.length > 0 \&\& item.title !== "Investors" \&\& <img/' Header.js

# Fix 2: Hide third-level submenu for Investors (lines 298-299)
sed -i '298,299s/page.subPages.length > 0 && (/page.subPages.length > 0 \&\& item.title !== "Investors" \&\& (/' Header.js

# Fix 3: Disable "Report & statement" link
sed -i 's/{page?.pageUrl != null ? (/{page?.pageUrl != null ? (item.title === "Investors" \&\& page.pageName === "Report \& statement" ? (<span style={{ cursor: "default", opacity: 0.6 }}>{page.pageName}<\/span>) : /' Header.js
sed -i 's/) : (/{page?.pageUrl?.replace/' Header.js

echo "Applied fixes"
