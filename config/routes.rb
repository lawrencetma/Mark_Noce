Rails.application.routes.draw do
  root 'marknoce#homepage'

  get '/homepage' => 'marknoce#homepage'
  get '/about' => 'marknoce#about'
  get '/books' => 'marknoce#books'
  get '/blog' => 'marknoce#blog'
  get '/appearances' => 'marknoce#appearances'
  get '/contact' => 'marknoce#contact'
end
