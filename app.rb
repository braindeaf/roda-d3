require 'roda'

Dir['./lib/helpers/*.rb'].sort.each { |file| require file }

class App < Roda
  plugin :render, engine: 'haml'
  plugin :assets

  include WebpackHelper

  route do |r|
    r.root do
      view 'index'
    end

    r.get 'hello' do
      view 'index'
    end
  end
end
