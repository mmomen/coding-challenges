def prime_checker(num, t = false)
  @num = num
  @count = 0
  (1..@num).each do |x|
    @count += 1 if (@num % x) == 0
    puts x.to_s + " " + @count.to_s if t
  end
  if @count == 2
    return true
  else
    return false
  end
end

def circ_prime?(num, t = false)
  @num_str = num.to_s
  @strings = (0...@num_str.length).collect { |i| (@num_str * 2)[i, @num_str.length] }
  @hash = Hash.new
  @strings.each do |x|
    x_num = x.to_i
    @hash[x_num] = prime_checker(x_num)
  end
  puts @hash if t
  return @hash.values.all? {|x| x==true}
end

puts prime_checker(7)
puts circ_prime?(1234, true)
