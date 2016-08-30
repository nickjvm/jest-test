#!/bin/bash
for I in {1..150}; do
    cp -r component component_${I}
    echo "// component_${I}" >> component_${I}/Article.js
    echo "// component_${I}" >> component_${I}/Button.js
    echo "// component_${I}" >> component_${I}/CheckboxWithLabel.js
    echo "// component_${I}" >> component_${I}/Heading.js
done