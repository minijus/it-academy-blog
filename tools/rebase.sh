branches=(master)
while IFS='' read -r line; do branches+=("$line"); done < <(git branch | cut -c 3- | grep -e '^\d' | sort)

declare branch
declare ontoBranch
for index in "${!branches[@]}"; do
  branch="${branches[$index]}"
  if [ "$branch" != "${branches[0]}" ]; then
    ontoBranch="${branches[$index-1]}"
    echo "Rebasing $branch onto $ontoBranch"
    git checkout "$branch" && git rebase "$ontoBranch"
  fi
done