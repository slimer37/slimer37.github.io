call bundle exec jekyll build --future -s "jekyll_src" -d blog
cd blog
call move 404.html ../404.html
pause