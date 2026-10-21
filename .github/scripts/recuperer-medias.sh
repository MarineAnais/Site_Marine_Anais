#!/usr/bin/env bash
# Copie une seule fois les images et PDF hébergés par Lovable (listés dans src/assets/*.asset.json)
# vers public/medias/, depuis le site actuellement en ligne.
set -euo pipefail
SOURCE="${SOURCE:-https://marineanais.fr}"
mkdir -p public/medias
fail=0
for f in src/assets/*.asset.json; do
  name=$(node -p "require('./$f').original_filename")
  path=$(node -p "require('./$f').url")
  expected=$(node -p "require('./$f').size")
  dest="public/medias/$name"
  if [ -s "$dest" ]; then echo "déjà présent : $name"; continue; fi
  curl -fsSL --retry 3 --retry-delay 2 -o "$dest" "$SOURCE$path" || { echo "ÉCHEC téléchargement : $name ($SOURCE$path)"; fail=1; rm -f "$dest"; continue; }
  got=$(stat -c %s "$dest")
  mime=$(file -b --mime-type "$dest")
  echo "$name | attendu $expected octets, reçu $got | $mime"
  if [ "$got" != "$expected" ] || [ "$mime" = "text/html" ]; then
    echo "  -> CONTENU INATTENDU, fichier écarté"; rm -f "$dest"; fail=1
  fi
done
echo "Fichiers rangés : $(ls public/medias | wc -l)"
exit $fail
