# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "tofi"
  spec.version       = "0.1.0"
  spec.authors       = ["betulnerukuc"]
  spec.email         = ["betulcukuren@gmail.com"]

  spec.summary       = "Minimalist Github Pages Blog Template"
  spec.homepage      = "https://betulgundogdu.github.io"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(_layouts|_includes|_scss|css|img|js|LICENSE|README)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.1"
end
