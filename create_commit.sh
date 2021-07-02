COMMIT_TIMESTAMP=$(date -u)
echo "Commit at ${COMMIT_TIMESTAMP}" >> commit_history
git add .
git commit -m "Commit at ${COMMIT_TIMESTAMP}"
git push